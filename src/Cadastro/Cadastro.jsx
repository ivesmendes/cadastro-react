import {FaUser, FaPhone, FaIdCard, FaMapMarkerAlt, FaCity, FaHome, FaHashtag, FaLock } from "react-icons/fa";

import { useState } from "react";

import "./Cadastro.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Cadastro = () => {

    const [username, setUsername] = useState("");
    const [telefone, setTelefone] = useState("");
    const [usercpf, setUsercpf] = useState("");
    const [usercep, setUsercep] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [userrua, setUserrua] = useState("");
    const [numero, setNumero] = useState("");
    const [useremail, setUseremail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
 className="input-field"
        console.log("Envio");
    };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Faça seu cadastro<img src="src/assets/eventify.ico" alt="icone" width={100} height={90}/></h1>

            <div className="input-field">
                <input type="nome" placeholder='Nome Completo' onChange={(e) => setUsername(e.target.value)} />
                <FaUser className="icon" />
            </div>

            <div className="input-field">
                <input type="telefone" placeholder='Telefone' minLength={11} maxLength={11} onChange={(e) => setTelefone(e.target.value)} />
                <FaPhone className="icon" />
            </div>

            <div className="input-field">
                <input type="cpf" placeholder='CPF' minLength={11} maxLength={11} onChange={(e) => setUsercpf(e.target.value)} />
                <FaIdCard className="icon" />
            </div>

            <div className="input-field">
                <input type="cep" placeholder='CEP' minLength={8} maxLength={8} onChange={(e) => setUsercep(e.target.value)} />
                <FaMapMarkerAlt className="icon" />
            </div>

            <div className="select-field">
                <select className="mostly-customized-scrollbar">
                    <option selected>Estado</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                </select>
                <IoIosArrowDropdownCircle className="icon" />
            </div>

            <div className="input-field">
                <input type="cidade" placeholder="Cidade" onChange={(e) => setCidade(e.target.value)} />
                <FaCity className="icon" />
            </div>

            <div className="input-field">
                <input type="rua" placeholder='Rua' onChange={(e) => setUserrua(e.target.value)}/>
                <FaHome className="icon" />
            </div>

            <div className="input-field">
                <input type="numero" placeholder='Número' onChange={(e) => setNumero(e.target.value)}/>
                <FaHashtag className="icon" />
            </div>

            <div className="input-field">
                <input type="email" placeholder='E-mail' onChange={(e) => setUseremail(e.target.value)}/>
                <FaUser className="icon" />
            </div>

            <div className="input-field">
                <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
                <FaLock className="icon" />
            </div>

            <button>Cadastrar</button>
        </form>
      </div>
    </div>
  )
}

export default Cadastro
