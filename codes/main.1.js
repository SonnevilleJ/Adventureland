// main.js

function useSkillIfAble(skillName) {
    logDebug("useSkillIfAble")
	if(!is_on_cooldown(skillName)) {
		use_skill(skillName);
	}
}

function replenishHpMp() {
    logDebug("replenishHpMp")
    if (character.hp < character.max_hp) {
        useSkillIfAble("regen_hp");
    }
    if (character.mp < character.max_mp) {
        useSkillIfAble("regen_mp");
    }
}

function main() {
    logDebug("main")
    if (character.rip) {
        logTrace("Character is dead");
        return;
    }

    replenishHpMp();

    loot();

    if(readyToFight()) autoFight(selectTarget());
}

logTrace("main loaded");
