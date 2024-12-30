import { useFormik } from "formik"
import { schema } from './schema';

const LoginPage = () => {
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
            actions.resetForm();
        },
    });

   
}

export default LoginPage