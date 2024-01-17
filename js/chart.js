 // Datos para el segundo gráfico de pastel
 var pieChartData = {
    labels: ['Online', 'Tienda'],
    datasets: [{
      data: [30, 50],
      backgroundColor: ['#6C9BCF', '#FF0060'],
      borderColor: ['transparent', 'transparent'],
      borderWidth: 2,
    }]
  };

  // Configuración del segundo gráfico de pastel
  const pieChartConfig = {
    type: 'pie',
    data: pieChartData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }
      }
    }
  };

  // Obtener el contexto del lienzo para el segundo gráfico
  var pieChartCtx = document.getElementById('myPieChart').getContext('2d');
  // Crear el segundo gráfico de pastel
  var myPieChart = new Chart(pieChartCtx, pieChartConfig);



  // Datos para el primer gráfico polar
  const polarChartData = {
    labels: ['Online', 'In-Store', 'Phone Sales', 'Mail Sales', 'Email Sales'],
    datasets: [{
      data: [30, 25, 15, 10, 20],
      borderColor: ['transparent', 'transparent'],
      borderWidth: 2,
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 205, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
      ],
    }],
  };

  // Configuración del primer gráfico polar
  const polarChartConfig = {
    type: 'polarArea',
    data: polarChartData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
  
      }
    },
  };

  // Obtener el contexto del lienzo para el primer gráfico polar
  const polarChartCtx = document.getElementById('myPolarChart').getContext('2d');
  // Crear el primer gráfico polar
  new Chart(polarChartCtx, polarChartConfig);

  // Datos para el tercer gráfico de línea
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Value',
      data: [10, 25, 15, 30, 20, 35],
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
            padding: {top: 20, left: 0, right: 0, bottom: 0}
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
            padding: {top: 30, left: 0, right: 0, bottom: 0}
          }
        }
      }
    },
  };

  // Obtener el contexto del lienzo para el tercer gráfico de línea
  const lineChartCtx = document.getElementById('myLineChart').getContext('2d');

  // Crear el tercer gráfico de línea
  new Chart(lineChartCtx, lineChartConfig);