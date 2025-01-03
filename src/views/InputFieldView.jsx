 const InputFieldView = ({formik, data}) => {
     // data parametresinde bir onje şeklinde bileşenin verilerini alacaz
     const {label,name,type}= data;
     // name : email
     // name :password
    return (
        <div>
            <label>{label}</label>
            <input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name={name}
                className={`form-control mt-2 ${
                    formik.touched[name] && formik.errors[name] && 'error'
                }`}
                type={type}
            />
            {formik.touched[name] && formik.errors[name] && (
                <span>{formik.errors[name]}</span>
            )}
        </div>
    )
}

export default InputFieldView