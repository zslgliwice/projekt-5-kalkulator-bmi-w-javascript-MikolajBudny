function obliczBMI() {
    const waga = parseFloat(document.getElementById('waga').value);
    const wzrost = parseFloat(document.getElementById('wzrost').value);
    const jednostki = document.getElementById('jednostki').value;

    if (isNaN(waga) || isNaN(wzrost) || waga <= 0 || wzrost <= 0) {
      document.getElementById('wynik').textContent = "Wpisz prawdiłowe dane.";
      return;
    }

    let bmi;
    if (jednostki === "metryczne") {
      const wzrostWMetrach = wzrost / 100;
      bmi = waga / (wzrostWMetrach * wzrostWMetrach);
    } else {
      const wagaWFuntach = waga * 0.453592;
      const wzrostWCalach = wzrost * 0.0254;
      bmi = wagaWFuntach / (wzrostWCalach * wzrostWCalach);
    }

    let kategoria = "";
    if (bmi < 18.5) {
        kategoria = "Niedowaga";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        kategoria = "Waga prawidłowa";
    } else if (bmi >= 25 && bmi < 29.9) {
        kategoria = "Nadwaga";
    } else {
        kategoria = "Otyłość";
    }

    document.getElementById('wynik').textContent = `Twoje BMI to ${bmi.toFixed(2)} (${kategoria}).`;
  }