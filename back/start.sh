#!/bin/bash

# Script para instalar y ejecutar Festivales App

echo "🎭 ============================================"
echo "🎭 Festivales - Plataforma de Eventos"
echo "🎭 ============================================"
echo ""

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado"
    echo "📦 Por favor, descarga e instala Node.js desde https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js detectado: $(node -v)"
echo "✅ npm detectado: $(npm -v)"
echo ""

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Error al instalar dependencias"
    exit 1
fi

echo "✅ Dependencias instaladas"
echo ""

# Iniciar servidor
echo "🚀 Iniciando servidor..."
echo "🌐 Abre tu navegador en: http://localhost:3000"
echo ""

npm start
