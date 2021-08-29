load_code("main");
load_code("fight");
load_code("log");

CurrentLogLevel = LogLevels.Warn;
logTrace(character.name + " loaded!");

setInterval(main, 250);
logTrace("Senax main loop started");

// // Hey there!
// // This is CODE, lets you control your character with code.
// // If you don't know how to code, don't worry, It's easy.
// // Just set attack_mode to true and ENGAGE!

// var _halt_ = false;
// const modes = {
// 	STARTUP: "Startup",
// 	FIGHTING: "Fighting",
// 	SELLING: "Selling",
// 	DEAD: "Dead...",
// };
// var current_mode;
// function set_mode(mode) {
// 	current_mode = mode;
// 	set_message(current_mode);
// };

// function use_skill_if_able(skill_name){
	
// 	if(!is_on_cooldown(skill_name)) {
// 		use_skill(skill_name);
// 	}
// };

// function start() {
// 	if(_halt_) return;
// 	if(character.rip) set_mode(modes.DEAD);
	
// 	switch(current_mode) {
// 		case modes.SELLING:
// 			vendor_junk();
// 			break;
// 		case modes.DEAD:
// 			halt("35");
// 			return;
// 		case modes.FIGHTING:
// 			fight();
// 			break;
// 		case modes.STARTUP:
// 		default:
// 			if(character.hp < character.max_hp) {
// 				use_skill_if_able("regen_hp");
// 			}
// 			if(character.mp < character.max_mp) {
// 				use_skill_if_able("regen_mp");
// 			}
// 			if(
// 				character.hp === character.max_hp &&
// 				character.mp === character.max_mp
// 			) set_mode(modes.FIGHTING);
// 			break;
// 	}
// };

// setInterval(start,100);

// function fight() {
// 	loot();
// 	if(character.hp <= character.max_hp - 50) use_skill_if_able("regen_hp");
// 	if(character.mp <= character.max_mp - 100) use_skill_if_able("regen_mp");

// 	var target = get_targeted_monster();
// 	if(validateTarget(target)) {
// 		target=select_monster_target({max_hp:500});
// 		if(target) change_target(target);
// 	}
// 	if(!target) {
// 		halt("70");
// 		return;
// 	}
// 	if(can_attack(target)) attack(target);
// };

// function vendor_junk() {
// 	halt("97");
// }

// function select_monster_target(args)
// {
// 	//game_log("select_monster_target start");
// 	//args:
// 	// max_att - max attack
// 	// min_xp - min XP
// 	// max_hp - maximum HP
// 	// target: Only return monsters that target this "name" or player object
// 	// no_target: Only pick monsters that don't have any target
// 	// path_check: Checks if the character can move to the target
// 	// mtype: Type of the monsters, for example "goo", can be referenced from `show_json(G.monsters)` [08/02/17]
// 	var min_d=999999,target=null;

// 	if(!args) args={};
// 	if(args && args.target && args.target.name) args.target=args.target.name;

// 	for(id in parent.entities)
// 	{
// 		var current=parent.entities[id];
		
// 		if(current.type!="monster" || !current.visible || current.dead) continue;
// 		if(args.mtype && current.mtype!=args.mtype) continue;
// 		if(args.min_xp && current.xp<args.min_xp) continue;
// 		if(args.max_att && current.attack>args.max_att) continue;
// 		if(args.max_hp && current.hp > args.max_hp) continue;
// 		if(args.target && current.target!=args.target) continue;
// 		if(args.no_target && current.target && current.target!=character.name) continue;
// 		if(args.path_check && !can_move_to(current)) continue;
// 		var c_dist=parent.distance(character,current);
// 		if(c_dist<min_d) min_d=c_dist,target=current;
// 	}
// 	game_log("returning monster " + target.name + " at X:" + target.x + " Y:" + target.y);
// 	return target;
// }

// function validateTarget(target) {
// 	if (target
// 		&& target.visible
// 		&& is_monster(target)
// 		&& parent.entities[target.id]
// 		&& is_in_range(target, "attack")
// 		&& (can_move_to(target) || is_in_range(target, "attack"))
// 		&& !target.dead
// 		&& target !== null
// 		) {
// 		//New, experimental distance measuring
// 		//&& distance(character, farmingSpotData) < farmingSpotMaxDist
// 		//&& distance(target, farmingSpotData) < farmingSpotMaxDist) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// function halt(code) {
// 	_halt_ = true;
// 	game_log("ERROR " + code + ": HALTING!!!");
// 	set_message("FIX " + code);
// }

// // Learn Javascript: https://www.codecademy.com/learn/introduction-to-javascript
// // Write your own CODE: https://github.com/kaansoral/adventureland

// // character.items.find(i => i.name = "hpot0").q
// // smart_move(find_npc("basics"));