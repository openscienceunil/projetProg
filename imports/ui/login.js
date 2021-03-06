import './login.html';

if(Meteor.isClient){

    Template.login.events({
        'submit form': function(event){
            event.preventDefault();
            Session.set('page', 'home');
            var emailVar = event.target.loginEmail.value;
            var passwordVar = event.target.loginPassword.value;
            Meteor.loginWithPassword(emailVar, passwordVar);
        }
    });

    Template.dashboard.events({
        'click .logout': function(event){
            event.preventDefault();
            Session.set('page', 'home')
            Meteor.logout();
        }
    });

}