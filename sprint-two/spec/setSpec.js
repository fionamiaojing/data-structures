describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });
  
  it('should only add once for the same values', function() {
    set.add('Mel Gibson');
    set.add('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(true);
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should be able to add values as numbers', function() {
    set.add(1);
    set.add('1');
    set.add(3);
    expect(set.contains(1)).to.equal(true);
    expect(set.contains('1')).to.equal(true);
    expect(set.contains(3)).to.equal(true);
  });
  
  it('should be able to add values of any types', function() {
    var val1 = [1, 2, 3];
    var val2 = {a: 1, b: 2};
    set.add(val1);
    set.add(val2);
    expect(set.contains(val1)).to.equal(true);
    expect(set.contains(val2)).to.equal(true);
  });
  
});
