import React from 'react'
import { useFormik } from 'formik';
import { schema } from '../schema'; 
import LoginPageView from '../views/LoginPageView';
import { useNavigate } from 'react-router-dom';


const LoginPageController = () => {
       const navigate = useNavigate();

    // useFormik > formiğin bütün özelliklerini kullanmamızı sağlar
    const formik = useFormik({
       // formda tutulacak verilerin ilk değeri
       initialValues: {
           email: '',
           age: '',
           password: '',
           confirmPassword: '',
       },

       //validasyon şeması tanımladığımız zaman formik
       // inputlardaki verilerin şemadaki koşullara uygun olmasını bekler
       // uygun değilse içerisindeki error state inde hataları tutar
       validationSchema: schema,

       // form gönderilince çalışır
       onSubmit: (values, actions) => {
           navigate("/home");
       },
   });
   return <LoginPageView formik={formik}/>
}

export default LoginPageController