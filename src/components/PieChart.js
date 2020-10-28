import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ result }) => {
  const data = {
    labels: [
      'Horas Diurnas',
      'Horas Nocturnas',
      'Horas Dominicales',
      'Horas Diurnas Extras',
      'Horas Nocturnas Extras',
      'Horas Dominicales Extras',
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [
          result.normal_hours / result.total_hours,
          result.night_hours / result.total_hours,
          result.week_hours / result.total_hours,
          result.extra_normal_hours / result.total_hours,
          result.extra_night_hours / result.total_hours,
          result.extra_week_hours / result.total_hours,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
