/**
 * Created by tomer_c on 11/7/2016.
 */

var passport = document.querySelector("#passport-template");
var posts = document.querySelector("#posts-template");
var url="https://jsonplaceholder.typicode.com/";

var id= getUserId();
getUser(id, printUser);
getPosts(id, printPosts);

function getUser(id, callback){

    $.getJSON(url+ "users/" + id, callback);
}

function getPosts(id, callback){
    $.getJSON(url+ "posts?userId=" + id, callback);
}

function getUserId(){
    return document.location.search.replace("id=", "");
}

function printUser(user){
    var tpl = $("#passport-template");
    var template = Handlebars.compile(tpl.html());
    var afterHandlebars = template(user);
    passport.innerHTML = afterHandlebars;
}

function printPosts(post){
    var tpl = $("#posts-template");
    var template = Handlebars.compile(tpl.html());
    var afterHandlebars = template({post: post});
    posts.innerHTML = afterHandlebars;
}