// Datos para el tercer gráfico de línea
const lineChartData = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  datasets: [{
    label: 'Analizis',
    data: [3, 34, 12, 21, 55, 68, 34, 22, 5, 9, 89, 6, 4, 8],
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 2,
    fill: false,
  }],
};

// Configuración del tercer gráfico de línea
const lineChartConfig = {
  type: 'line',
  data: lineChartData,
  options: {
    responsive: true,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Mes',
          color: '#911',
          font: {
            family: 'Poppins, sans-serif',
            size: 20,
            weight: 'bold',
            lineHeight: 1.2,
          },
          padding: { top: 20, left: 0, right: 0, bottom: 0 }
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Ventas en el mes',
          color: '#1B9C85',
          font: {
            family: 'Poppins, sans-serif',
            size: 20,
            style: 'normal',
            lineHeight: 1.2
          },
          padding: { top: 30, left: 0, right: 0, bottom: 0 }
        }
      }
    }
  },
};

// Obtener el contexto del lienzo para el tercer gráfico de línea
const lineChartCtx = document.getElementById('myLineChart').getContext('2d');

// Crear el tercer gráfico de línea
new Chart(lineChartCtx, lineChartConfig);