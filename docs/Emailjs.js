// Javascript for sending email form, currently using Emailjs API/service from: https://www.emailjs.com/
// TODO: change/integrate DJANGO/other framework and self-server to send form instead of using cloud platform.


function SendEmail() {
    const dateofemail = Date()
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,

        date: dateofemail, // gets date of function call/email sent
    };


        const serviceID = 'service_74dhubo';
        const TemplateID = 'template_xqx9do8';


        emailjs.send(serviceID,TemplateID,params).then((res) => {
                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('message').value = "";
                date.value; // gets date of function call/email sent
                console.log(res);
            })
            .catch((error) => console.log(error));
    
}

// works, email is sent to proxy: joe.web****1@gmail.com
// tutorial/setup thanks to: https://www.youtube.com/watch?v=dgcYOm8n8ME
