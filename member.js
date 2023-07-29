function skillsmember() {
    return {
        restrict: 'E',
        templateUrl: 'templates/skills.html',
        controller: 'SkillsController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}