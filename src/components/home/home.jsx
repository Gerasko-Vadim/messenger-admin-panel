import React,{useState} from "react"
import classes from "./home.module.css"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller, useFormContext } from 'react-hook-form';
import { Redirect } from "react-router";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const Home =()=>{
    const { handleSubmit, control,formState: { errors }, reset } = useForm();
    const classesMaterial = useStyles();
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const onSubmitLogin =(data)=>{
        console.log(data)
        setIsLoggedIn(true);
    }
    return(
        <>
        {isLoggedIn && <Redirect to="/adminPanel" />}
        <div className={classes.App}>
        <div className={classes.wrapper}>
            <span className={classes.title}>ADMIN PANEL</span>
            <form className={classesMaterial.root} onSubmit={handleSubmit(onSubmitLogin)}>
            <Controller
    
              render={({ field: { onChange, onBlur, value } })=>(
            <TextField
            onBlur={onBlur}
            onChange={value => onChange(value)}
            value={value}
            label={"Логин"}
            id="email"
            helperText={errors.email ? errors.email.message : null}
            error={errors.email ? true : false}
          />
              )
              }
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: 'Это поле обязательное',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Неверный адрес электронной почты'
                }
              }}
            />
        <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            onBlur={onBlur}
            onChange={value => onChange(value)}
            value={value}
            label={"Пароль"}
            id="password"
            helperText={errors.password ? errors.password.message : null}
            error={errors.password ? true : false}
          />
        )}
        name="password"
        defaultValue=""
        rules={{
            required: 'Введите пароль',
          }}
      />
            
                <button className={classes.btn} type="submit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Войти
                </button>
            </form>
        </div>
        </div>

        </>
       
    )
}
export default Home;