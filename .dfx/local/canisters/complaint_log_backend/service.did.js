export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addComplaint' : IDL.Func([IDL.Text, IDL.Text], [IDL.Bool], []),
    'getComplaintCount' : IDL.Func([], [IDL.Int], ['query']),
    'getData' : IDL.Func([], [IDL.Vec(IDL.Vec(IDL.Text))], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
