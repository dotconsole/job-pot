// "use client";


export const getENV = (key: string) => {
  const cachedVars: { [arg: string | number]: string } = {}

  if (cachedVars[key]) {
    return cachedVars[key]
  }

  cachedVars[key] = process.env[key]!
  return cachedVars[key];
}

// const { data, error } = await supabase
//   .from('Weather')
//   .insert([
//     { some_column: 'someValue', other_column: 'otherValue' },
//   ])
//   .select()




// const options = {
//   method: 'GET',
//   url: 'https://weatherapi-com.p.rapidapi.com/current.json',
//   params: {q: 'Ottawa'},
//   headers: {
//     'X-RapidAPI-Key': '84f1311ademsh51049eedf95ad99p16ea8cjsn959901fb1258',
//     'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }