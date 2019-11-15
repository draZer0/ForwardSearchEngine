window.onload = function() {
  let datum = new Date();
  let uren = datum.getHours();
  let dagdeel;
  let label = document.getElementById('js--welcome');

  if (uren >= 6 && uren <= 12)
      dagdeel = 'Goedemorgen';
  else if (uren >= 12 && uren <= 18)
      dagdeel = 'Goedemiddag';
  else if (uren >= 18 && uren <= 24)
      dagdeel = 'Goedenavond';
  else if (uren >= 0 && uren <= 6)
      dagdeel = 'Goedenacht';

  label.innerHTML = '<span style="color:rgba(5,105,163,1);font-weight:bold;">' + dagdeel + '!</span>';
}
