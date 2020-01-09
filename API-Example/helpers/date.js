/**
 * Calcula la edad dada una fecha determinada en formato dd-mm-yyyy.
 * @param {string} paramfecha : 27-06-1997
 * @version        1.0.0 - 08 Ene 2020
 * @author         Mathias Molina - mathiasm1
 * @returns {string} : 22
 */

const calculateAge =(birthday)=> {
  const birthday_arr = birthday.split("-");
  const birthday_date = new Date(
    birthday_arr[2],
    birthday_arr[1] - 1,
    birthday_arr[0]
  );
  const ageDifMs = Date.now() - birthday_date.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}


/**
 * Calcula la fecha actual y lo devuelve en formato dd-mm-yyy.
 * @version        1.0.0 - 08 Ene 2020
 * @author         Mathias Molina - math1asm1
 * @returns {string} : 08-01-2020
 */

const fechaNow =()=> {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!

  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  today = `${dd}-${mm}-${yyyy}`;
  return today;
}

module.exports = { calculateAge, fechaNow };
