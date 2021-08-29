log("fight loaded");

function readyToFight() {
    logDebug("readyToFight");
    return character.hp > character.max_hp * .90
        && character.mp > character.max_mp * .90;
}

function autoFight(target) {
    logDebug("autoFight");
	if (can_attack(target)) {
        change_target(target);
		attack(target);
    }
}

function selectTarget() {
    logDebug("selectTarget");
    let target = get_targeted_monster();
    if (validateTarget(target)) {
        return target;
    }
    target = select_monster_target({ max_hp: 1100 });
    if (target)
        return target;
    else
        log("Broken!");
}

function validateTarget(target) {
    logDebug("validateTarget");
	return (
		target
		&& target.visible
		&& is_monster(target)
		&& parent.entities[target.id]
		&& is_in_range(target, "attack")
		&& (can_move_to(target) || is_in_range(target, "attack"))
		&& !target.dead
		&& target !== null
		//New, experimental distance measuring
		//&& distance(character, farmingSpotData) < farmingSpotMaxDist
		//&& distance(target, farmingSpotData) < farmingSpotMaxDist
	)
}

function select_monster_target(args)
{
	//game_log("select_monster_target start");
	//args:
	// max_att - max attack
	// min_xp - min XP
	// max_hp - maximum HP
	// target: Only return monsters that target this "name" or player object
	// no_target: Only pick monsters that don't have any target
	// path_check: Checks if the character can move to the target
	// mtype: Type of the monsters, for example "goo", can be referenced from `show_json(G.monsters)` [08/02/17]
    let min_d = 999999, target = null;

    if(!args) args={};
	if(args && args.target && args.target.name) args.target=args.target.name;

    let count = 0;
    for(let id in parent.entities)
	{
        count++;
        const current = parent.entities[id];

        if(!is_monster(current) || !current.visible || current.dead) continue;
		if(args.mtype && current.mtype!==args.mtype) continue;
		if(args.min_xp && current.xp<args.min_xp) continue;
		if(args.max_att && current.attack>args.max_att) continue;
		if(args.max_hp && current.hp > args.max_hp) continue;
		if(args.target && current.target!==args.target) continue;
		if(args.no_target && current.target && current.target!==character.name) continue;
		if(args.path_check && !can_move_to(current)) continue;
        const c_dist = parent.distance(character, current);
        if(c_dist<min_d) min_d=c_dist,target=current;
	}
	//log(" returning monster " + target.name + " at X:" + target.x + " Y:" + target.y);
	return target;
}