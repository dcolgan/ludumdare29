C.Player = ECS.Component.extend({
    init: function() {
        this.name = 'player';

    }
});

C.Rock = ECS.Component.extend({
    init: function(mesh) {
        this.name = 'rock';
    }
});

C.Mesh = ECS.Component.extend({
    init: function(mesh) {
        this.name = 'mesh';
        this.mesh = mesh;
    }
});

C.RigidBody = ECS.Component.extend({
    init: function(body) {
        this.name = 'rigidBody';
        this.body = body;
    }
});

C.PlaySound = ECS.Component.extend({
    init: function(soundEffectKey, volume) {
        this.name = 'playSound';
        this.soundEffectKey = soundEffectKey;
        this.volume = volume;
    }
});

C.ActionInput = ECS.Component.extend({
    init: function() {
        this.name = 'actionInput';
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        this.pause = false;
    }
});

C.KeyboardArrowsInput = ECS.Component.extend({
    init: function() {
        this.name = 'keyboardArrowsInput';
    }
});

C.Camera = ECS.Component.extend({
    init: function(camera) {
        this.name = 'camera';
        this.camera = camera;
        this.pitchObject = new THREE.Object3D();
        this.pitchObject.add(camera);

        this.yawObject = new THREE.Object3D();
        this.yawObject.add(this.pitchObject);
        this.pivot = new THREE.Object3D();

        this.pivot.add(this.yawObject);
    }
});

C.GameStats = ECS.Component.extend({
    init: function() {
        this.name = 'gameStats';
        this.metersFallen = 0.0;
        this.metersToMonster = 0.0;
    }
});
