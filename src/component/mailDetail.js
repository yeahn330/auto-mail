import React, {useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom"
import axios from "axios";
import Grid from '@mui/material/Grid';
import Watson from './testWatson';

function createMarkup(htmtlProps) {
  return {__html: htmtlProps};
}

export default function MailDetail(){

  const param = useParams()
  console.log(param.selectMailbox)
  console.log(param.uid)

  let [detail, setDetail] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const fetchRows = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setDetail(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.post(
          'http://139.150.73.246:5000/autoMailDetail',
          {
            'selectMailbox': param.selectMailbox,
            'uid': param.uid
          }
        );
        setDetail(response.data); // 데이터는 response.data 안에 들어있습니다.

      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchRows();
  }, [param.selectMailbox, param.uid]);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!detail) return null;

  return (
    <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} >
        <TableBody>
            <TableRow>
              <TableCell style={{ width: 160 }} align="left">
                <Grid container spacing={2}>
                  <Grid item xs={10}>
                    {detail.subject}
                  </Grid>
                  <Grid item xs={2} justifyContent="flex-end">
                      <Watson  mailbody={detail.body} />
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ width: 160 }} align="left">
                <Box>
                  {detail.body.split(">")[0]==="<html" | detail.body.split("div")[0]==="<"
                  ?<div dangerouslySetInnerHTML={createMarkup(detail.body)} /> 
                  : detail.body.split("\n").map((line, index) => {
                    return (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    );
                  })}
                </Box>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}