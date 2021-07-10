function resolution(){
  event.preventDefault();
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let c = document.getElementById("c").value;
  let resultat = document.getElementById("resultat");
  if(a!="" && b!="" && c!=""){
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    if(a != 0){
      let discriminant = Math.pow(b,2)-4*a*c;
      if(discriminant == 0){
        let solution = -b/(2*a);
        resultat.innerHTML = "L'équation admet dans R une double solution X = <span>"+solution+"</span>";
      }
      else if(discriminant < 0){
        resultat.innerHTML = "L'équation n'admet pas de solution dans R";
      }
      else{
        let solution1 = (-b-Math.sqrt(discriminant))/(2*a);
        let solution2 = (-b+Math.sqrt(discriminant))/(2*a);
        resultat.innerHTML = "L'équation admet dans R deux solutions distintes X1 = <span>"+solution1+"</span> et X2 = <span>"+solution2+"</span>";
      }
    }
    else{
      if(b != 0){
        let solution = -c/b;
        resultat.innerHTML = "L'équation admet dans R une unique solution X = <span>"+solution+"</span>";
      }
      else{
        if(c != 0){
          resultat.innerHTML = "L'équation n'admet pas de solution.";
        }
        else{
          resultat.innerHTML = "L'équation admet une multitude de solution. C'est à dire l'ensemble solution est R.";
        }
      }
    }
  }
  else{
    resultat.innerHTML = "Veuillez renseigner tous les champs !!";
  }
}
