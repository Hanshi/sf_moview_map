
/*
 * GET home page.
 */

exports.searchmovie = function(db){
    return function(req, res){
       var input_string = req.body.movie_name;
       console.log(input_string); 
    };
	
  //s.render('index', { title: 'Search Movie in SF' })
};
