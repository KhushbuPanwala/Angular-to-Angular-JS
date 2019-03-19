'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {  
    template:`
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-2">
              
              </div>
              <div class="col-md-10">
                <ul class="phones">
                  <li ng-repeat="phone in $ctrl.phones | filter:$ctrl.query | orderBy:$ctrl.orderProp"
                      class="thumbnail phone-list-item">            
                    <a href="#/phones/{{phone.id}}" class="thumb">
                      <img ng-src="./ng2/assets/{{phone.imageUrl}}" alt="{{phone.name}}" />
                    </a>                    
                    <a href="#/phones/{{phone.id}}">{{phone.name}}</a>
                    <p>{{phone.snippet}}</p>
                    
                  </li>
                </ul>
          
              </div>
            </div>
          </div>`,
  //  templateUrl: './ng1/phone-list/phone-list.template.html',  
  
controller: ['Phone',
      function PhoneListController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';             
      }]
      
  });
