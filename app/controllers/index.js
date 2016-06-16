import Ember from 'ember';

export default Ember.Controller.extend({

    emailAddress: '',

    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),

    actions: {

        saveInvitation() {
            alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
            this.set('responseMessage', `Thank you! Weve just saved your email address: ${this.get('emailAddress')}`);
            "Thank you" + this.get('emailAddress') + "end of story"
            `asdfasdf ${variable} asdfasdf`
            this.set('emailAddress', '');
        }
    }

});

//Observers will always be called when the value of the emailAddress changes, while the computed property only changes when you go and use that property
