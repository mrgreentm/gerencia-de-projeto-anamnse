import Image from "next/image";
import { Button, Input, Radio, RadioGroup } from "@nextui-org/react";

export default function Home() {
  return (
    <div style={{ 
      height: "100vh",  
      width: "100vw",  
      margin: 0,        
      padding: 0,       
      backgroundColor: "#eaeaea",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{ 
        position: "fixed", 
        top: 0,            
        left: 0,          
        width: "100%",     
        height: "10vh",    
        backgroundColor: "green", 
        padding: "10px",  
        zIndex: 2,          
        display: "flex",   
        alignItems: "center", 
        justifyContent: "center" 
      }}>
        <h1 style={{ color: "#fff", margin: 0 }}>Formulário de Informações Pessoais</h1>
      </div>
      <section style={{
        margin: "auto",  
        padding: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        marginBottom: "20px",
        width: "80%" 
      }}>
        <div style={{ marginBottom: "20px" }}>
          <Input type="text" label="Nome completo" placeholder="Insira seu nome completo" />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <Input type="date" label="Data de nascimento" placeholder="Insira sua Data de nascimento" />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <Input required type="number" label="Idade" placeholder="Insira sua idade" />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <RadioGroup label="Sexo">
            <Radio value="masculino">Masculino</Radio>
            <Radio value="feminino">Feminino</Radio>
            <Radio value="outro">Outro</Radio>
          </RadioGroup>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <Input required type="number" label="Altura" placeholder="1.75" />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <Input required type="text" label="Profissão" placeholder="Pedreiro" />
        </div>
        <Button color="primary">
          Confirmar
        </Button>
      </section>
    </div>
  );
}

