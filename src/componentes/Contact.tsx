import React from 'react';
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from 'react-icons/ai';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl fade-in delay-300">
      <h2 className="text-3xl font-bold text-[#2d3748] mb-8 border-b pb-2">Contato</h2>
      
      <div className="bg-white rounded-xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Entre em contato</h3>
            <p className="text-gray-600 mb-6">
              Estou disponível para novas oportunidades e colaborações. 
              Sinta-se à vontade para entrar em contato comigo através dos canais abaixo.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <AiOutlineMail className="w-6 h-6 text-[#5e9dc1]" />
                <span className="text-gray-700">webjorgejunior@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-3">
                <AiOutlinePhone className="w-6 h-6 text-[#5e9dc1]" />
                <span className="text-gray-700">(47) 99160-2725</span>
              </div>
              
              <div className="flex items-center gap-3">
                <AiOutlineEnvironment className="w-6 h-6 text-[#5e9dc1]" />
                <span className="text-gray-700">Blumenau, SC - Brasil</span>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5e9dc1]" 
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5e9dc1]" 
                  placeholder="Seu e-mail"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5e9dc1]" 
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="px-6 py-2 bg-gradient-to-r from-[#2d3748] to-[#1a202c] text-white rounded-md hover:opacity-90 transition-opacity"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}