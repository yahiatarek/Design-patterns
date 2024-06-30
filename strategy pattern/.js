// Many algorithms can be decomposed into higher- and lower-level parts
// Making tea can be decomposed into
// - The process of making a hot beverage (boil water, pour into cup); and
// - Tea-specific things (put teabag into water)
// The high-level algorithm (The process of making a hot beverage) can then be reused for making
// coffee or hot chocolate
// Supported by other beverage-specific strategies
//  so the strategy design pattern is basically used to enable the exact behavior 
// of a system to be used at run time + other specific strategies needed

class Creature
{
  constructor(attack, health)
  {
    this.attack = attack;
    this.health = health;
    this.alive = this.health > 0;
    this.count = 0
    this.id = this.attack + this.alive + this.health + Math.floor((Math.random() * 99) + 1)
  }
}


class Game
{
  constructor(damageStrategy)
  {
    this.damageStrategy = damageStrategy;
  }

  springTrapOn(creature)
  {
    this.damageStrategy.damage(creature);
    return creature.alive;
  }
}

class DamageStrategy
{
  damage(creature)
  {
    if (creature.health <= 0)
    {
      creature.alive = false;
    }
  }
}

class ConstantDamageStrategy extends DamageStrategy
{
  damage(creature)
  {
    creature.health = creature.health - 1;
    super.damage(creature);
  }
}

class GrowingDamageStrategy extends DamageStrategy
{
  damage(creature)
  {
    creature.count = creature.count + 1
    GrowingDamageStrategy.impact[creature.id] = creature.count
    creature.health = creature.health - creature.count
    super.damage(creature);
    console.log(creature)
  }
}
GrowingDamageStrategy.impact = {};

const growingDamageStrategyCreature = new Creature(10, 10)
const constantDamageStrategyCreature = new Creature(10, 10)

const constantDS = new ConstantDamageStrategy()

const growingDS = new GrowingDamageStrategy()

// const constantTrap = new Game(constantDS)
// constantDS.damage(constantDamageStrategyCreature)
// constantDS.damage(constantDamageStrategyCreature)
// constantDS.damage(constantDamageStrategyCreature)

// console.log(constantDamageStrategyCreature, 'from constant')

const growingTrap = new Game(growingDS)
growingDS.damage(constantDamageStrategyCreature)
growingDS.damage(constantDamageStrategyCreature)
growingDS.damage(constantDamageStrategyCreature)

// console.log(growingDamageStrategyCreature, 'from growing')