 // calling native method of io to make connection between servr and client and keep that connection open
        var socket = io();


        // Connected to server event listner
        socket.on('connect', function(){
            console.log('Connected to Server');

            // // similar to lister event but it emit(sending) event instead of listening
            // socket.emit('createEmail',{
            //     to: 'james@yahoo.com',
            //     text:'Hey Man. Where are you... call me'
            // });

            // socket.emit('createMessage', {
            //     from: 'Arslan Shafiq',
            //     text: 'Yahhh... its workiing',
            // });
        });

        // connection terminated from server
        socket.on('disconnect', function(){
            console.log('Disconnected From The Server');

            

        });

        // socket.on('newEmail', function(email) {
        //    console.log('New Email', email); 
        // });

        socket.on('newMessage',function (message) {
            console.log('newMessage', message);

            var li = jQuery('<li></li>');
            li.text(`${message.from}: ${message.text}`);

            jQuery('#messages').append(li);
        })

        jQuery('#message-form').on('submit', function(e){
            e.preventDefault();
            socket.emit('createMessage', {
                from: 'User',
                text: jQuery('[name=message]').val()
            }, function(){

            });
        });