export default class parseSongs
{
    search_songs_name(name, songlist)
    {
        //searches songs by name 
        var songs = [];    
        const all_songs = songlist;
        for(let i = 0; i < all_songs.length; i++)  
        {
            //go through all the songs and see if it's there
            var cur_song = all_songs[i];
            var found_string = cur_song.name.toLowerCase().search(name.toLowerCase());
            if(found_string !== -1
                && name !== ""
                && (found_string === 0 || cur_song.name[found_string-1] === ' '))
            {
                songs.push(cur_song);
            }
        }  
        return songs;
    }
    search_songs_artist(artist, songlist)
    {
        //this searches songs by artist
        //searches songs by name   
        var songs = []; 
        const all_songs = songlist;
        for(let i = 0; i < all_songs.length; i++)  
        {
            //go through all the songs and see if it's there
            var cur_song = all_songs[i];
            var found_string = cur_song.artist.toLowerCase().search(artist.toLowerCase());
            if(found_string !== -1
                && artist !== ""
                && (found_string === 0 || cur_song.artist[found_string-1] === ' '))
            {
                songs.push(cur_song);
            }
        }  
        return songs;
    }
    search_songs_genre(genre, songlist)
    {
        //this searches songs by artist
        //searches songs by name   
        var songs = []; 
        const all_songs = songlist;
        for(let i = 0; i < all_songs.length; i++)  
        {
            //go through all the songs and see if it's there
            var cur_song = all_songs[i];
            var found_string = cur_song.genre.toLowerCase().search(genre.toLowerCase());
            if(found_string !== -1
                && genre !== ""
                && (found_string === 0 || cur_song.genre[found_string-1] === ' '
                || cur_song.genre[found_string-1] === '/'))
            {
                songs.push(cur_song);
            }
        }  
        return songs;
    }
    search_songs(input, songlist)
    {
        ///the general function that branches off
        //into the other functions
        var songs_by_name = this.search_songs_name(input, songlist);
        var songs_by_artist = this.search_songs_artist(input, songlist);
        var songs_by_genre = this.search_songs_genre(input, songlist);
        
        var temp1 = songs_by_name.concat(songs_by_artist);
        var result = temp1.concat(songs_by_genre);
        return result;
    }
    
}