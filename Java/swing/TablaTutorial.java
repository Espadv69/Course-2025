package swing;

import javax.swing.JFrame;

public class TablaTutorial extends JFrame {

  public TablaTutorial() {
    JFrame form = new JFrame("Tabla Tutorial");
    form.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    form.setSize(400, 300);

    form.setVisible(true);
  }

  public static void main(String[] args) {
    new TablaTutorial();
  }

}
