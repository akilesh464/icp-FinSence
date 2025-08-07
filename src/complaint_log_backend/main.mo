import Array "mo:base/Array";
import Bool "mo:base/Bool";
actor {
  var titles : [Text] = [];
  var descriptions : [Text] = [];

  public func addComplaint(title: Text, description: Text) : async Bool {
    titles := Array.append(titles, [title]);
    descriptions := Array.append(descriptions, [description]);

    return true;
  };

  public query func getData() : async [[Text]] {
    return [titles, descriptions];
  };

  public query func getComplaintCount() : async Int {
    return Array.size(titles);
  };
};
