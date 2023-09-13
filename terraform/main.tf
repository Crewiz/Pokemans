terraform {
  required_providers {
    hcloud = {
      source = "hetznercloud/hcloud"
    }
  }
}

provider "hcloud" {
  token = var.hcloud_token
}


resource "hcloud_server" "jenkins_server" {
  name     = "jenkins-server"
  image    = "ubuntu-20.04"
  server_type = "cx21"
  ssh_keys = [var.ssh_key_name]

  connection {
    host        = self.ipv4_address
    type        = "ssh"
    user        = "root"
    private_key = file(var.ssh_private_key_path)
  }

  provisioner "remote-exec" {
    inline = [
      "apt-get update",
      "apt-get install -y docker.io",
      "systemctl start docker",
      "systemctl enable docker",
      "docker run -d -p 8080:8080 -p 50000:50000 jenkins/jenkins:lts"
    ]
  }
}
