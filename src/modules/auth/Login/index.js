import React from 'react';
import {
  Box,
  Button,
  TextField,
  Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import useStyles from './style';

function Login() {
  const classes = useStyles();

  const { control, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Box className={classes.root}>
        <Typography className={classes.title}>Log In</Typography>
        
        <Box component="form" width="500px" onSubmit={handleSubmit(onSubmit)}>
          <Box width="100%" marginTop="64px">
            <Controller
              as={
                <TextField
                  type="email"
                  placeholder="Email"
                  error={!!errors.email}
                  fullWidth
                  autoFocus
                />
              }
              name="email"
              control={control}
              rules={{
                required: 'This field is required',
              }}
              defaultValue=""
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (<Typography className={classes.error} color="error">{message}</Typography>)}
            />
          </Box>
          <Box width="100%" marginTop="64px">
            <Controller
              as={
                <TextField
                  type="password"
                  placeholder="Password"
                  error={!!errors.password}
                  fullWidth
                />
              }
              name="password"
              control={control}
              rules={{
                required: 'This field is required',
              }}
              defaultValue=""
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (<Typography className={classes.error} color="error">{message}</Typography>)}
            />
          </Box>

          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginTop="64px"
          >
            <Button
              type="submit"
              className={classes.submit}
              variant="contained"
              color="primary"
              disableElevation
            >
              LOG IN
            </Button>
            <Typography variant="body1">
              Don't have an account? 
              <Link className={classes.link} to="/signup">Create an account</Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Login;
