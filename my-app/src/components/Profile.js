export default function Profile(){
    return(
        <div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                <img src="/profileImg.png" alt="Foto Lucas" className="w-[150px]"></img>
            </div>
            <div>
                <h1>Olá, me chamo Lucas!!</h1>
                <p>Sou estudante de Sistemas para Internet e tenho grande interesse na área de desenvolvimento de software. Atualmente estou aprendendo Java, JavaScript e tecnologias web modernas. Gosto de desenvolver projetos para praticar e melhorar minhas habilidades de programação.</p>
            </div>
        </div>
    );
}