// main.js

function useSkillIfAble(skillName) {
    logTrace("useSkillIfAble")
	if(!is_on_cooldown(skillName)) {
        logDebug("Using *" + skillName + "*!");
		use_skill(skillName);
	}
}

function replenishHpMp() {
    logTrace("replenishHpMp")
    if (character.hp < character.max_hp) {
        useSkillIfAble("regen_hp");
        return; // can't replenish HP **OR** MP afterwards
    }
    if (character.mp < character.max_mp) {
        useSkillIfAble("regen_mp");
    }
}

function main() {
    logTrace("main")
    if (character.rip) {
        logTrace("Character is dead");
        return;
    }

    replenishHpMp();

    loot();

    if (readyToFight()) autoFight(selectTarget());
}
