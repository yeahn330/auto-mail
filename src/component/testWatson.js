import React, {useEffect} from 'react';
import axios from "axios";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function TestWatson(props){

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    let [watson, setWatson] = React.useState(null);
    const [wloading, setWLoading] = React.useState(false);
    const [werror, setWError] = React.useState(null);
  
    let propssss = props.mailbody.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "");
    propssss = propssss.replace(/\n/g, "")
    propssss = propssss.split("원본 메일")
    propssss = propssss[0].split("Original Message")
    propssss = propssss[0].replace(/\r/g, "");
    propssss = propssss.split("bizppurio <bizppurio@daou.co.kr>님이 작성:")
    propssss = propssss[0].substr(0, 2048)
    propssss = propssss.replace(/\t/g, " ");
      
    useEffect(function persistForm() {
        const fetchWRows = async () => {
          try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setWError(null);
            setWatson(null);
            // loading 상태를 true 로 바꿉니다.
            setWLoading(true);
            const response = await axios.post(
              'http://139.150.73.246:5000/watsonResult',
              {
                'watsonInput': propssss
              }
            );
            setWatson(response.data); // 데이터는 response.data 안에 들어있습니다.
          } catch (e) {
            setWError(e);
          }
          setWLoading(false);
        };
    
        fetchWRows();
      }, []);
    
      if (wloading) return (
        <Item>
            <Button onClick={handleOpen} variant="contained">왓슨 추천답변</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                로딩중...
                </Typography>
            </Box>
            </Modal>
        </Item>
      );
      if (werror) return <div>에러가 발생했습니다</div>;
      if (!watson) return null;
    
      return (
          <div>
              <Item>
        <Button onClick={handleOpen} variant="contained">왓슨 추천답변</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {watson}
                </Typography>
            </Box>
            </Modal>
            </Item>
        </div>
      )
    }