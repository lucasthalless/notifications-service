import { Content } from './content';

export interface NotificationProps {
  content: Content;
  category: string;
  readAt?: Date | null;
  // A interrogação do typescript implica que o valor de readAt pode ser  undefined
  // Já o  | null  sugere que ele pode ser nullable, ou seja,
  // eu posso por exemplo atualizar uma instancia de Notification no banco de dados
  // que já possuia uma data para um valor nulo, enquanto undefined seria uma indicação de que esse valor nao existe,
  // de que ele nao faz parte dessa instancia de Notification.
  createdAt: Date;
}

export class Notification {
  private props: NotificationProps;

  constructor(props: NotificationProps) {
    this.props = props;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }
}
