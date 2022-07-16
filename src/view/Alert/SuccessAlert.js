import swal from 'sweetalert';

const SuccessAlert=()=>(
    swal({
        title: "SUCCESS!",
        text: "Package Added",
        icon: "success",
      })

);



export default SuccessAlert;