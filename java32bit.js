define(function(require) {
    var hashCode = function(data){
        var hash = 0;
        if (data.length == 0) return hash;
        for (i = 0; i < data.length; i++) {
            char = data.charCodeAt(i);
            hash = ((hash<<5)-hash)+char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    };

    return hashCode;
});