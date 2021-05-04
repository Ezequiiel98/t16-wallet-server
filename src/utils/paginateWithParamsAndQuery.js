function paginateWithParamsAndQuery(_page, _pageSize) { 
  const page = parseInt(_page) || 0;
  const pageSize = parseInt( _pageSize)  || 10; 

  let offset = (page - 1) * pageSize;
  
  if ( offset < 0 ) { offset = 0 }  

  return { pageSize, offset}  
}

module.exports = paginateWithParamsAndQuery;