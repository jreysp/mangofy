import React from 'react';
export default class parseSongs
{
    constructor()
    {

    }
    printSongs() 
    {
        const songs = require('./data.json');
        console.log(songs);
    }
    search_songs_name(name)
    {
        //searches songs by name 
        var songs = [];    
        const all_songs = require('./data.json');
        for(let i = 0; i < all_songs.list.length; i++)  
        {
            //go through all the songs and see if it's there
            var cur_song = all_songs.list[i];
            if(cur_song.name === name)
            {
                //we found the song
                //display the info ... 
                console.log("FOUND THE SONG!");
                console.log(cur_song.name);
                //console.log(cur_song.artist);
                //console.log(cur_song.genre);
                songs.push(cur_song);
            }
        }  
        //console.log("Song not found in database!!");
        return songs;
    }
    search_songs_artist(artist)
    {
        //this searches songs by artist
        //searches songs by name   
        var songs = []; 
        const all_songs = require('./data.json');
        for(let i = 0; i < all_songs.list.length; i++)  
        {
            //go through all the songs and see if it's there
            var cur_song = all_songs.list[i];
            if(cur_song.artist === artist)
            {
                //we found the song
                //display the info ... 
                //console.log("FOUND THE SONG!");
                //console.log(cur_song.name);
                //console.log(cur_song.artist);
                //console.log(cur_song.genre);
                songs.push(cur_song);
            }
        }  
        return songs;
        //console.log("Song not found in database!!");
    }
    search_songs_genre(genre)
    {
        //this searches songs by artist
        //searches songs by name   
        var songs = []; 
        const all_songs = require('./data.json');
        for(let i = 0; i < all_songs.list.length; i++)  
        {
            //go through all the songs and see if it's there
            var cur_song = all_songs.list[i];
            if(cur_song.genre === genre)
            {
                //we found the song
                //display the info ... 
                //console.log("FOUND THE SONG!");
                //console.log(cur_song.name);
                //console.log(cur_song.artist);
                //console.log(cur_song.genre);
                songs.push(cur_song);
            }
        }  
        return songs;
        //console.log("Song not found in database!!");
    }
    search_songs(input)
    {
        ///the general function that branches off
        //into the other functions
        var songs_by_name = this.search_songs_name(input);
        var songs_by_artist = this.search_songs_artist(input);
        var songs_by_genre = this.search_songs_genre(input);
        
        var temp1 = songs_by_name.concat(songs_by_artist);
        var result = temp1.concat(songs_by_genre);
        return result;
    }
    
}


//export default class parseSongs{};