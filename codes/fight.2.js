// fight.js

const blacklistedMobs = [
    "Kitty",
    "Puppy",
]

function readyToFight() {
    logDebug("readyToFight");
    return (character.hp > character.max_hp * .90
            && character.mp > character.max_mp * .90)
        || selectMonsterTarget({target: character.name});
}

function autoFight(target) {
    logTrace("autoFight");
    if (target && can_attack(target)) {
        change_target(target);
        attack(target);
    }
}

function selectTarget() {
    logTrace("selectTarget");
    let target = get_targeted_monster();
    if (isValidTargetForAttack(target)) {
        return target;
    }
    target = selectMonsterTarget({max_hp: 5000, max_att: 60});
    if (target)
        return target;
    else
        logWarn("Can't find a target!");
}

function isValidTargetForAttack(target) {
    logTrace("isValidTargetForAttack");
    return (
        target
        && target.visible
        && is_monster(target)
        && parent.entities[target.id]
        && is_in_range(target, "attack")
        && (can_move_to(target) || is_in_range(target, "attack"))
        && !target.dead
        //New, experimental distance measuring
        //&& distance(character, farmingSpotData) < farmingSpotMaxDist
        //&& distance(target, farmingSpotData) < farmingSpotMaxDist
    )
}

function selectMonsterTarget(args) {
    logTrace("selectMonsterTarget");
    //args:
    // max_att - max attack
    // min_xp - min XP
    // max_hp - maximum HP
    // target: Only return monsters that target this "name" or player object
    // no_target: Only pick monsters that don't have any target
    // path_check: Checks if the character can move to the target
    // mtype: Type of the monsters, for example "goo", can be referenced from `show_json(G.monsters)` [08/02/17]
    let min_d = 999999, target = null;

    if (!args) args = {};
    if (args && args.target && args.target.name) args.target = args.target.name;

    for (let id in parent.entities) {
        const current = parent.entities[id];

        if (!is_monster(current) || !current.visible || current.dead) continue;
        if (args.mtype && current.mtype !== args.mtype) continue;
        if (args.min_xp && current.xp < args.min_xp) continue;
        if (args.max_att && current.attack > args.max_att) continue;
        if (args.max_hp && current.hp > args.max_hp) continue;
        if (args.target && current.target !== args.target) continue;
        if (args.no_target && current.target && current.target !== character.name) continue;
        if (args.path_check && !can_move_to(current)) continue;
        if (blacklistedMobs.includes(current.name)) continue;
        const c_dist = parent.distance(character, current);
        if (c_dist < min_d) {
            min_d = c_dist;
            target = current;
        }
    }
    if (target) {
        logTrace("Returning monster " + target.name + " at X:" + target.x + " Y:" + target.y);
    } else {
        logTrace("Can't find a monster target!");
    }
    return target;
}

logTrace("fight loaded");
