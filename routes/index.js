
/*
 * GET home page.
 */

exports.index =  function(req, res){
      res.render('index', { title: 'Search Film Locations in SF' })
}

exports.searchmovie = function(){
    return function(req, res){
       var input_string = req.body.movie_name;
       console.log(input_string);
    };  
        
  //s.render('index', { title: 'Search Movie in SF' })
};

