module.exports = (app) =>{
    app.get('/', (req, res) => res.render('home/index',{message:'Hello EJS!'}));
    app.get('/contato', (req, res) => { 
        res.render('home/contact',{
            email:'',
            message:'',
            errors:[]
        }); 
    }); 

    app.get('/obrigado',(req, res)=>{
        res.render('home/index', {message: "Obrigado pela mensagem"});
    });


    app.post('/contato', (req, res)=> {
    let email =  req.body.email.trim();
    let message = req.body.message.trim();
    let errors = [];

    if(!email){
        errors.push("Adicione seu endereço de e-mail");
    }
    if(!message){
        errors.push("Adicione sua mensagem!");
    }

    if(errors.length > 0){
        res.render('home/contact',{
            email,
            message,
            errors
        });
    }

    res.redirect('/obrigado');
    });
}