var Mongoose = require("mongoose");
var settlement = require('../models/settlement');
require('../models/learning');

var Discussion = Mongoose.model('Discussion');
var Video = Mongoose.model('Video');
var Author = Mongoose.model('Author');

var LearningHandler = function() {
	// get training calls
	this.getAllDiscussion = getAllDiscussion;
	this.createAuthorofDiscussion = createAuthorofDiscussion;
	this.getDiscussion = getDiscussion;
	this.createDiscussion = createDiscussion;
	this.createvideoDiscussion = createvideoDiscussion;
	console.log("TrainingHandler  Set Up");
};

function getAllDiscussion(req,res,next) {
	console.log("creating new createDiscussion");
	console.log(req.body);

	Discussion.find().populate('author')
	.populate('videos').exec(function(err, Discussion){
		if (err) {next(err);};
		res.json(Discussion);
	});
};
function getDiscussion(req,res,next) {

	var query = Discussion.findById(req.params.Discussion).populate('videos').
	populate('author');
	query.exec(function(err, Discussion){
		if (err) {return next(err);};
		if (!Discussion) {return next(new Error('can\'t find post'))};
		res.json(Discussion);
	});
};


function createDiscussion(req,res,next) {
	console.log("creating new createDiscussion");
	console.log(req.body);

	var discussion = new Discussion();
	discussion.discussion_id = req.body.discussion_id;
	discussion.topicName = req.body.topicName;
	discussion.description = req.body.description;
	discussion.logo = req.body.longDescription;
	discussion.technology = req.body.technology;
	discussion.longDescription = req.body.longDescription;
	discussion.save(function(err){
		if (err) {
			return next(err);
		}
		res.send({'success': true});
	});
};
function createAuthorofDiscussion(req,res,next) {

	var author = new Author();
	var query = Discussion.findById(req.params.Discussion);
	query.exec(function(err, Discussion){
		if (err) {return next(err);};
		if (!Discussion) {return next(new Error('can\'t find post'))};
		var author = new Author();
		req.Discussion = Discussion;
		author.name = req.body.name;
		author.discussion = req.Discussion;
		author.save(function(err, author){
			if (err) {
				return next(err);
			}
			req.Discussion.author =  req.author ;
			req.Discussion.save(function(err,Discussion){
				if (err) {return next(err);};
				res.json(Discussion);
			});
			//res.send({'success': true});
		});

	});
};
function createvideoDiscussion(req,res,next) {

	var video = new Video();
	var query = Discussion.findById(req.params.Discussion);
	query.exec(function(err, Discussion){
		if (err) {return next(err);};
		if (!Discussion) {return next(new Error('can\'t find post'))};

		req.Discussion = Discussion;
		video.discussion = req.Discussion;
		video.name = req.body.name;
		video.description = req.body.description;
		video.link = req.body.link;
		video.playlist = req.body.playlist;
		video.technology = req.body.technology;
		video.logo = req.body.logo;

		video.save(function(err, video){
			if (err) {return next(err);};

			req.Discussion.videos.push(video);
			req.Discussion.save(function(err,Discussion){
				if (err) {return next(err);};
				res.json(Discussion);
			});
		});
	});
};




module.exports = LearningHandler;

