let x = 10;

for (let i = 1; i <= x; i++){
  let isim = prompt('Ismingizni kiritin')
  
  while (Number(isim) || isim === '') {
    const x = prompt('Ismingizni kiritin')
    if(x.length > 0|| !Number(x)){
      isim = x;
    }
  }
  
  let yosh = +prompt('Iltimos yoshingizni yozing')
  
  while (!Number(yosh) || yosh === 0) {
    const x = +prompt('Iltimos yoshingizni yozing')
    if(x.length > 0|| Number(x)){
      yosh = x;
    }
  }
  
  
  console.log('Foydalanuvchi soni:', i, 'Sizning ismingiz:', isim, 'Sizning yoshingiz:', yosh)
}