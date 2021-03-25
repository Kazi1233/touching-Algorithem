function touch(move,rest){

    if (move.x -rest.x<move.width/2+rest.width/2
        && rest.x-move.x<move.width/2+rest.width/2
        && move.y -rest.y<move.height/2+rest.height/2
        && rest.y -move.y<rest.height/2+move.height/2)
    {
        return true
    }
      else{
          return false
      }


}