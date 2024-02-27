import Image from "next/image";
import { Button, Input, Radio, RadioGroup } from "@nextui-org/react";

export default function Home() {
  return (
    <main style={{ padding: "40px", backgroundColor: "#eaeaea" }}>
      <section style={{
        padding: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        marginBottom: "20px"
      }}>
        <div style={{ marginBottom: "20px" }}>
          <Input type="text" label="Nome completo" placeholder="Insira seu nome completo" fullWidth />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <Input type="date" label="Data de nascimento" placeholder="Insira sua Data de nascimento" fullWidth />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <Input required type="number" label="Idade" placeholder="Insira sua idade" fullWidth />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <RadioGroup label="Sexo">
            <Radio value="masculino">Masculino</Radio>
            <Radio value="feminino">Feminino</Radio>
            <Radio value="outro">Outro</Radio>
          </RadioGroup>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <Input required type="number" label="Altura" placeholder="1.75" fullWidth />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <Input required type="text" label="Profissão" placeholder="Pedreiro" fullWidth />
        </div>
        <Button color="primary">
          Confirmar
        </Button>
      </section>
    </main>
  );
}
