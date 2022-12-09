import React, { useEffect, useState } from "react";
// import socketIOCLient from "socket.io-client";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001")
let jogadasO =  []
let jogadasX = []

export default function App() {
const [opcaoX, setOpcaoX] = useState('X')
const [opcaoO, setOpcaoO] = useState('O')
  // opcoes do tabuleiro...
  const [opcao1, setOpcao1] = useState('')
  const [opcao2, setOpcao2] = useState('')
  const [opcao3, setOpcao3] = useState('')
  const [opcao4, setOpcao4] = useState('')
  const [opcao5, setOpcao5] = useState('')
  const [opcao6, setOpcao6] = useState('')
  const [opcao7, setOpcao7] = useState('')
  const [opcao8, setOpcao8] = useState('')
  const [opcao9, setOpcao9] = useState('')

  
  // opces de vitoria de acordo com o tabuleiro
  const [jogador, setJogador] = useState('X')

  const [vencedor, setVencedor] = useState('')
  
  const [message, setMessage] = useState('')
  const [messageReceived, setMessageReceived] = useState('')

  const sendMessage1 =()=>{
    if(jogador === 'X'){
      jogadasX.push('1');
      console.log(jogadasX)
      setOpcao1('X');
      socket.emit("send_message", {message: 'X', pos: 1, ganhador: vencedor})
      setJogador('O');
      verificarJogador()
    }else{
      jogadasO.push('1');
      console.log(jogadasO)
      setOpcao1('O');
      socket.emit("send_message", {message: 'O', pos: 1, ganhador: vencedor})
      setJogador('X');
      verificarJogador()
    }
    
  }

  const sendMessage2 =()=>{
    if(jogador === 'X'){
      jogadasX.push('2');
      setOpcao2('X');
      console.log(jogadasX)
      socket.emit("send_message", {message: 'X', pos: 2, ganhador: vencedor})
      setJogador('O')
      verificarJogador()
    }else{
      jogadasO.push('2')
      setOpcao2('O');
      socket.emit("send_message", {message: 'O', pos: 2, ganhador: vencedor})
      setJogador('X')
      verificarJogador()
    }
  }

  const sendMessage3 =()=>{
    if(jogador === 'X'){
      jogadasX.push('3');
      setOpcao3('X');
      console.log(jogadasX)
      socket.emit("send_message", {message: 'X', pos: 3, ganhador: vencedor})
      setJogador('O');
      verificarJogador()
    }else{
      jogadasO.push('3')
      setOpcao3('O');
      socket.emit("send_message", {message: 'O', pos: 3, ganhador: vencedor})
      setJogador('X')
      verificarJogador()
    }
  }

  const sendMessage4 =()=>{
    if(jogador === 'X'){
      jogadasX.push('4')
      setOpcao4('X');
      socket.emit("send_message", {message: 'X', pos: 4, ganhador: vencedor})
      setJogador('O');
      verificarJogador()
    }else{
      jogadasO.push('4')
      setOpcao4('O');
      socket.emit("send_message", {message: 'O', pos: 4, ganhador: vencedor})
      setJogador('X')
      verificarJogador()
    }
  }

  const sendMessage5 =()=>{
    if(jogador === 'X'){
      jogadasX.push('5')
      socket.emit("send_message", {message: 'X', pos: 5, ganhador: vencedor})
      setOpcao5('X');
      setJogador('O');
      verificarJogador();
    }else{
      jogadasO.push('5')
      setOpcao5('O');
      socket.emit("send_message", {message: 'O', pos: 5, ganhador: vencedor})
      setJogador('X')
      verificarJogador();
    }
  }

  const sendMessage6 =()=>{
    if(jogador === 'X'){
      jogadasX.push('6')
      setOpcao6('X');
      socket.emit("send_message", {message: 'X', pos: 6, ganhador: vencedor})
      setJogador('O');
      verificarJogador();
    }else{
      jogadasO.push('6')
      setOpcao6('O');
      socket.emit("send_message", {message: 'O', pos: 6, ganhador: vencedor})
      setJogador('X')
      verificarJogador();
    }
  }

  const sendMessage7 =()=>{
    if(jogador === 'X'){
      jogadasX.push('7')
      setOpcao7('X');
      socket.emit("send_message", {message: 'X', pos: 7, ganhador: vencedor})
      setJogador('O');
      verificarJogador();
    }else{
      jogadasO.push('7')
      socket.emit("send_message", {message: 'O', pos: 7, ganhador: vencedor})
      setOpcao7('O');
      setJogador('X')
      verificarJogador();
    }
  }

  const sendMessage8 =()=>{
    if(jogador === 'X'){
      jogadasX.push('8')
      setOpcao8('X');
      socket.emit("send_message", {message: 'X', pos: 8, ganhador: vencedor})  
      setJogador('O');
      verificarJogador();
    }else{
      jogadasO.push('8')
      socket.emit("send_message", {message: 'O', pos: 8, ganhador: vencedor})
      setOpcao8('O');
      setJogador('X');
      verificarJogador();
    }
  }

  const sendMessage9 =()=>{
    if(jogador === 'X'){
      jogadasX.push('9')
      setOpcao9('X');
      socket.emit("send_message", {message: 'X', pos: 9})
      setJogador('O');
      verificarJogador();
    }else{
      jogadasO.push('9')
      socket.emit("send_message", {message: 'O', pos: 9})
      setOpcao9('O');
      setJogador('X');
      verificarJogador();
    }
  }

  const verificarJogador =()=>{
    if(jogadasX.includes('1') && jogadasX.includes('2') && jogadasX.includes('3')){
      socket.emit("send_message", {ganhador: 'X'})  
      setVencedor('X')
    }if(jogadasX.includes('4') && jogadasX.includes('5') && jogadasX.includes('6')){
      socket.emit("send_message", {ganhador: 'X'})
      setVencedor('X')
      console.log('jogador X ganhou')
    }if(jogadasX.includes('7') && jogadasX.includes('8') && jogadasX.includes('9')){
      socket.emit("send_message", {ganhador: 'X'})
      setVencedor('X')
      console.log('jogador X ganhou')
    }if(jogadasX.includes('1') && jogadasX.includes('5') && jogadasX.includes('9')){
      socket.emit("send_message", {ganhador: 'X'})
      setVencedor('X')
      console.log('jogador X ganhou')
    }if(jogadasX.includes('3') && jogadasX.includes('5') && jogadasX.includes('7')){
      socket.emit("send_message", {ganhador: 'X'})
      setVencedor('X')
      console.log('jogador X ganhou')
    }if(jogadasX.includes('1') && jogadasX.includes('4') && jogadasX.includes('7')){
      socket.emit("send_message", {ganhador: 'X'})
      setVencedor('X')
      console.log('jogador X ganhou')
    }if(jogadasX.includes('2') && jogadasX.includes('5') && jogadasX.includes('8')){
      socket.emit("send_message", {ganhador: 'X'})
      setVencedor('X')
      console.log('jogador X ganhou')
    }if(jogadasX.includes('3') && jogadasX.includes('6') && jogadasX.includes('9')){
      socket.emit("send_message", {ganhador: 'X'})
      setVencedor('X')
      console.log('jogador X ganhou')
    }
    if(jogadasO.includes('4') && jogadasO.includes('5') && jogadasO.includes('6')){
      socket.emit("send_message", {ganhador: 'O'})
      setVencedor('O')
      console.log('jogador O ganhou')
    }if(jogadasO.includes('7') && jogadasO.includes('8') && jogadasO.includes('9')){
      socket.emit("send_message", {ganhador: 'O'})
      setVencedor('O')
      console.log('jogador O ganhou')
    }if(jogadasO.includes('1') && jogadasO.includes('5') && jogadasO.includes('9')){
      socket.emit("send_message", {ganhador: 'O'})
      setVencedor('O')
      console.log('jogador O ganhou')
    }if(jogadasO.includes('3') && jogadasO.includes('5') && jogadasO.includes('7')){
      socket.emit("send_message", {ganhador: 'O'})
      setVencedor('O')
      console.log('jogador O ganhou')
    }if(jogadasO.includes('1') && jogadasO.includes('4') && jogadasO.includes('7')){
      socket.emit("send_message", {ganhador: 'O'})
      setVencedor('O')
      console.log('jogador O ganhou')
    }if(jogadasO.includes('2') && jogadasO.includes('5') && jogadasO.includes('8')){
      socket.emit("send_message", {ganhador: 'O'})
      setVencedor('O')
      console.log('jogador O ganhou')
    }if(jogadasO.includes('3') && jogadasO.includes('6') && jogadasO.includes('9')){
      socket.emit("send_message", {ganhador: 'O'})
      setVencedor('O')
      console.log('jogador O ganhou')
    }
  }

  useEffect(()=>{
    socket.on("receive_message", (data) => {
      verificarJogador()
      console.log(data)
      if(data.ganhador){
        setVencedor(data.ganhador)
      }
      if(data.message === 'O'){
        setJogador('X')
        setMessageReceived(data.message);
      }else{
        setJogador('O')
        setMessageReceived(data.message);
      }
      if(data.pos == 1){
        setOpcao1(data.message)        
      }else if(data.pos == 2){
        setOpcao2(data.message)
      }
      else if(data.pos == 3){
        setOpcao3(data.message)
      }
      else if(data.pos == 4){
        setOpcao4(data.message)
      }
      else if(data.pos == 5){
        setOpcao5(data.message)
      }
      else if(data.pos == 6){
        setOpcao6(data.message)
      }
      else if(data.pos == 7){
        setOpcao7(data.message)
      }
      else if(data.pos == 8){
      setOpcao8(data.message)
      }
      else if(data.pos == 9){
        setOpcao9(data.message)
      }
    })
    
  },[])

  
  


  return (
    <div style={{width:"100%", height:"100%", alignItems:"center"}}>
      <div style={{display:"flex", justifyContent:"center",}}>
        <button onClick={sendMessage1} style={{backgroundColor:"red", width:'150px', height:"150px", marginRight:20, marginTop:20}}><p style={{fontSize:'50px'}}>{opcao1}</p></button>
        <button onClick={sendMessage2} style={{backgroundColor:"red", width:'150px', height:"150px", marginRight:20, marginTop:20}}><p style={{fontSize:'50px'}}>{opcao2}</p></button>
        <button onClick={sendMessage3} style={{backgroundColor:"red", width:'150px', height:"150px", marginRight:20, marginTop:20}}><p style={{fontSize:'50px'}}>{opcao3}</p></button>
      </div>

      <div style={{display:"flex", justifyContent:"center"}}>
        <button onClick={sendMessage4} style={{backgroundColor:"red", width:'150px', height:"150px", marginRight:20, marginTop:20}}><p style={{fontSize:'50px'}}>{opcao4}</p></button>
        <button onClick={sendMessage5} style={{backgroundColor:"red", width:'150px', height:"150px", marginRight:20, marginTop:20}}><p style={{fontSize:'50px'}}>{opcao5}</p></button>
        <button onClick={sendMessage6} style={{backgroundColor:"red", width:'150px', height:"150px", marginRight:20, marginTop:20}}><p style={{fontSize:'50px'}}>{opcao6}</p></button>
      </div>

      <div style={{display:"flex", justifyContent:"center"}}>
        <button onClick={sendMessage7} style={{backgroundColor:"red", width:'150px', height:"150px", marginRight:20, marginTop:20}}><p style={{fontSize:'50px'}}>{opcao7}</p></button>
        <button onClick={sendMessage8} style={{backgroundColor:"red", width:'150px', height:"150px", marginRight:20, marginTop:20}}><p style={{fontSize:'50px'}}>{opcao8}</p></button>
        <button onClick={sendMessage9} style={{backgroundColor:"red", width:'150px', height:"150px", marginRight:20, marginTop:20}}><p style={{fontSize:'50px'}}>{opcao9}</p></button>
      </div>
      <div style={{justifyContent:"center", alignItems:"center", display:"flex"}}>
        <h2 style={{fontSize:'50px'}}>Vencedor:</h2>
        <h2 style={{fontSize:'50px', color:'green'}}>{vencedor}</h2>
      </div>
      
    </div>
  )
}

